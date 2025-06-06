import React from 'react';
import { clsx } from 'clsx';

import AvatarRoot from './fragments/AvatarRoot';
import AvatarImage from './fragments/AvatarImage';
import AvatarFallback from './fragments/AvatarFallback';

const COMPONENT_NAME = 'Avatar';

const Avatar = () => {
    console.warn('Direct usage of Avatar is not supported. Please use Avatar.Root, Avatar.Image, Avatar.Fallback instead.');
    return null;
};

Avatar.displayName = COMPONENT_NAME;
Avatar.Root = AvatarRoot;
Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export default Avatar;
