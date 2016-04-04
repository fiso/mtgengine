"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArbalestElite extends Card {
  constructor(game) {
    super(game, "Arbalest Elite", "Magic 2012", "M12");
  }
}

module.exports = ArbalestElite;
