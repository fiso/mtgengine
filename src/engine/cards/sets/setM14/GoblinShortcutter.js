"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinShortcutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Shortcutter", "Magic 2014", "M14");
  }
}

module.exports = GoblinShortcutter;
