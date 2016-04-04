"use strict";
const Constants = require ("../../../Constants");
const GoblinShortcutterBase = require("../setM14/GoblinShortcutter");

class GoblinShortcutter extends GoblinShortcutterBase {
  constructor(game) {
    super(game, "Goblin Shortcutter", "Zendikar", "ZEN");
  }
}

module.exports = GoblinShortcutter;
