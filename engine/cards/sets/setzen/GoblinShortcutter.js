"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinShortcutterBase = require("../setM14/GoblinShortcutter.js");

class GoblinShortcutter extends GoblinShortcutterBase {
  constructor(game) {
    super(game, "Goblin Shortcutter", "Zendikar", "ZEN");
  }
}

module.exports = GoblinShortcutter;
