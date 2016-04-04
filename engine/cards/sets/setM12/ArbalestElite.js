"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArbalestElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Arbalest Elite", "Magic 2012", "M12");
  }
}

module.exports = ArbalestElite;
