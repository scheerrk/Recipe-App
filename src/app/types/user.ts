export interface User {
    id?: number;
    username?: string;
    displayName?: string;
    photoUrl?: string;
    enabled: boolean;
    commentNotifications: boolean;
    likeNotifications: boolean;
    recipeSavedNotifications: boolean;
    newFollowerNotifications: boolean;
    userRecipes: any[];
    //TODO: change this to collections
    bookmarks: any[];
}