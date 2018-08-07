"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonsHoard extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon's Hoard", "Core Set 2019", "M19");
  }
}

module.exports = DragonsHoard;
