"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemembertheFallen extends Card {
  constructor(game) {
    super(game, "Remember the Fallen", "New Phyrexia", "NPH");
  }
}

module.exports = RemembertheFallen;
