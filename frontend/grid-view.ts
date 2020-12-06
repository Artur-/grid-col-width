import { css, customElement, html, LitElement, query } from "lit-element";
import "@vaadin/vaadin-grid";

@customElement("grid-view")
export class AboutView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  @query("vaadin-grid")
  grid!: HTMLElement;

  gridDataProvider = this.getData.bind(this);

  render() {
    return html` <vaadin-grid .dataProvider="${this.gridDataProvider}">
      <vaadin-grid-column auto-width path="first"></vaadin-grid-column>
      <vaadin-grid-column auto-width path="last"></vaadin-grid-column>
    </vaadin-grid>`;
  }
  getData(_params: any, _callback: any) {
    const items = [
      {
        first: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        last: "111",
      },
      { first: "bbb", last: "222" },
      { first: "ccc", last: "333" },
    ];

    const variant = 1;

    // @ts-ignore
    if (variant == 1) {
      setTimeout(() => {
        // "First" becomes much wider than "Last"
        _callback(items, 3);
      }, 1000);
    } else if (variant === 2) {
      _callback(items);
      setTimeout(() => {
        // "First" becomes the same width as "Last"
        (this.grid as any).size = 3;
      }, 1000);
    }
  }
}
