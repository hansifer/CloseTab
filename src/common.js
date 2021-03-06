/* exported contextMenuLabel, get, set */

function contextMenuLabel(shortcutKey) {
    switch (shortcutKey) {
        case 'W':
        case 'Q':
        case 'X':
        case 'E':
        case 'D':
        case 'Z':
            return 'Close tab  (&' + shortcutKey + ')';
    }

    return '&Close tab';
}

function get(key) {
    var val = localStorage.getItem(key);

    if (val == null && key === 'shortcut-key') {
        val = localStorage.getItem('shortcutKey');
    }

    if (val) {
        return val;
    }

    // return default
    switch (key) {
        case 'shortcut-key':
            return 'C';
    }
}

function set(key, val) {
    if (key === 'shortcut-key') {
        localStorage.removeItem('shortcutKey');
    }

    localStorage.setItem(key, val);
}
