interface Article {
    content: string | null;
    contentType: keyof typeof ContentType;
    id: string;
    keywords: string[] | null;
    publishedDate: string | null;
    publishingLevel: keyof typeof PublishingLevel;
    source: string | null;
    sourceURL: string | null;
    title: string | null;
}
type ArticleWithoutContent = Omit<Article, 'content'>;
declare enum PublishingLevel {
    production = "PRODUCTION",
    realtime = "REALTIME",
    staging = "STAGING"
}
declare enum ContentType {
    TEXT_MARKDOWN = "TEXT_MARKDOWN",
    TREE_PANTHEON = "TREE_PANTHEON"
}

export { ArticleWithoutContent as A, ContentType as C, PublishingLevel as P, Article as a };
