const header = '[TSD-JSDoc]';

let isVerbose = false;

export function setVerbose(value: boolean)
{
    isVerbose = value;
}

export function warn(msg: string, data?: any|TAnyDoclet)
{

    if (typeof(console) === 'undefined')
        return;

    let prefix = header;
    if (arguments.length > 1 && data && data.hasOwnProperty('meta')) {
        const meta = data.meta;
        prefix = `${prefix} ${meta.filename}:${meta.lineno}:${meta.columnno}`;
    }

    console.warn(`${prefix} ${msg}`);

    if (isVerbose && arguments.length > 1)
    {
        console.warn(data);
    }
}
