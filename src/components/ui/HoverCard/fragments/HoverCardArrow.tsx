import React, { useContext } from 'react';
import { clsx } from 'clsx';
import Floater from '~/core/primitives/Floater';
import HoverCardContext from '../contexts/HoverCardContext';

const HoverCardArrow = ({ ...props }) => {
    const { floatingContext, arrowRef, rootClass } = useContext(HoverCardContext);

    return <Floater.Arrow className={clsx(`${rootClass}-arrow`)} {...props} context={floatingContext} ref={arrowRef} />;
};

export default HoverCardArrow;
