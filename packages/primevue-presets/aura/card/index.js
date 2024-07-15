export default {
    root: {
        class: [
            //Flex
            'flex flex-col',

            //Shape
            'rounded-[12px]',
            'shadow-md',
            'backdrop-blur-xl',

            //Color
            'bg-surface-0 dark:bg-stone-900/100',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    body: {
        class: [
            //Flex
            'flex flex-col',
            'gap-4',

            'p-2',
            'sm:p-2',
            'md:p-4',
            'lg:p-6'
        ]
    },
    caption: {
        class: [
            //Flex
            'flex flex-col',
            'gap-2'
        ]
    },
    title: {
        class: 'text-xl font-semibold mb-0 px-3 py-2'
    },
    subtitle: {
        class: [
            //Font
            'font-normal',

            //Spacing
            'mb-0',

            //Color
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    content: {
        class: 'p-0'
    },
    footer: {
        class: 'p-0'
    }
};
