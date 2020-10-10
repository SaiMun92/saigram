import React from "react";
import {mount, shallow} from "enzyme";
import Title from "../Title";
import {act} from "react-dom/test-utils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";


const waitForComponentToPaint = async (wrapper: any) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

describe("Title", () => {

    it("Ensure h1 title is present", () => {
       const wrapper = shallow(<Title />);
       expect(wrapper.find('h1').text()).toEqual('SaiGram');
    });

    it("Ensure h2 title is present", () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('h2').text()).toEqual('Your Pictures');
    })

    it("Ensure api is fetched and quote is set",(done) => {
        // https://stackoverflow.com/questions/55388587/how-should-i-test-react-hook-useeffect-making-an-api-call-with-typescript

        const mock = new MockAdapter(axios);
        mock.onGet('https://type.fit/api/quotes').reply(200,
            [{text: "Sai is a genius", author: "Thomas Edison"}]);
        const component = mount(<Title />);
        waitForComponentToPaint(component);
        setImmediate(() => {
            component.update();
            expect(component.find('p').text()).toEqual('Sai is a genius - Thomas Edison');
            done();
        });
    });

})