import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as QalcLib from './Qalc';

module QalcGui {
	class GuiLineElement {
		public id: number;
		private static idCounter = 0;
		constructor(public input: string, public output: string) {
			this.id = GuiLineElement.idCounter++;
		}
	}
	interface GuiState {
		lines: GuiLineElement[];
	}
	export class GUILine extends React.Component<{ line: GuiLineElement }, {}> {
		render() {
			return <div className="gui-line"><hr />
					<p>> {this.props.line.input}</p>
					<pre><code>{this.props.line.output}</code></pre>
				</div>
		}
	}
	let guiInst: GUI;
	const presetLines = `
	5600 mA h * 11.7 V to W h
	100W * 10 days * 0.25€/kWh
	7MBit/s * 2h to GByte
	32bit/(0.2bit/s) to s
	88 mph to km/s|88 * mph = 0.03933952(km / s)
	sqrt(2 * (6 million tons * 500000 MJ/kg) / (100000 pounds))/c to 1|sqrt((2 * ((6 * million * tonne * 500000 * megajoule) / kilogram)) / (100000 * pound)) / speed_of_light = approx. 1.2131711
	
	`;
	function loadPresetLines() {
		presetLines.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
			.map(line => line.split("|")[0])
			.map(input => QalcLib.qalculate(input).then(output => guiInst.addLine(new GuiLineElement(input, output))));
	}
	export class GUI extends React.Component<{}, GuiState> {
		constructor(props:{}) {
			super(props);
			guiInst = this;
			this.state = {lines: []};
			loadPresetLines();
		}
		addLine(line: GuiLineElement) {
			const lines = this.state.lines.slice();
			lines.unshift(line);
			this.setState({ lines: lines });
		}
		keyPress(evt: KeyboardEvent) {
			if (evt.charCode == 13) {// enter
				const target = evt.target as HTMLInputElement;
				const input = target.value.trim();
				if(input.length > 0) QalcLib.qalculate(input).then(output => 
					this.addLine(new GuiLineElement(input, output))
				);
				target.value = "";
			}
		}
		render() {
			return <div>
				> <input onKeyPress={this.keyPress.bind(this) } />
				{this.state.lines.map(line => <GUILine key={line.id} line={line} />) }
				</div>;
		}
	}
}
ReactDOM.render(
<div className="container">
	<div className="page-header">
		<h1>Qalc</h1>
	</div>
	<QalcGui.GUI />
</div>, document.getElementById("root"));