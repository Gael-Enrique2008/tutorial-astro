import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Gael | Blog',
        description: 'Mi viaje de aprendizaje de Astro',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./posts/*.md')
        ),
        customData: `<language>es-ES</language>`,
    });
}