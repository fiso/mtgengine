"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GideonsAvenger extends Card {
  constructor(game) {
    super(game, "Gideon's Avenger", "Magic 2012", "M12");
  }
}

module.exports = GideonsAvenger;
