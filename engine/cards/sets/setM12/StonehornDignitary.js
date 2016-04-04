"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonehornDignitary extends Card {
  constructor(game) {
    super(game, "Stonehorn Dignitary", "Magic 2012", "M12");
  }
}

module.exports = StonehornDignitary;
