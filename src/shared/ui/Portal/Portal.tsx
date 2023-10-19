import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    // то, что телепотирую
    children: ReactNode;
    // куда телепортирую
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
