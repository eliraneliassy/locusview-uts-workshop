import { ComponentHarness } from "@angular/cdk/testing"

export class PopUpHarness extends ComponentHarness {
    static hostSelector = 'my-popup';

    protected getButtonElement = this.locatorFor('.btn');
    protected getContentElement = this.locatorForOptional('.content');

    async toggle() {
        const btn = await this.getButtonElement();
        return btn.click();
    }

    async isDisplayed() {
        const content = await this.getContentElement();
        return !!content;
    }
}