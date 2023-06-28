import { describe, it, expect } from "vitest";
import { 
    render,
    screen,
    fireEvent, 
    waitFor,
} from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
    it('Renders a navbar with five menu items', () => {
        const menuItems = [""];
        render(<Navbar menuItems={menuItems} />);
        const menuItemsElements = screen.getAllByRole('listitem');
        expect(menuItemsElements).toHaveLength(5);
    });

    it('Renders a navbar with li menu items', () => {
        const menuItems = [""];
        render(<Navbar menuItems={menuItems} />);
        screen.debug();
    });
});
