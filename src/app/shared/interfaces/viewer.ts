import { Sections } from './sections';
import { PackageData } from './package';

/**
 * Interface for API result
 */
export interface ViewerState {
    display_name: string;
    avatarImg: string;
    access_token: string;
    user_id: string;
    user_package: PackageData;
    navLinks: Sections;
}
