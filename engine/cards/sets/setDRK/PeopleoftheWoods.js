"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeopleoftheWoods extends Card {
  constructor(game) {
    super(game, "People of the Woods", "The Dark", "DRK");
  }
}

module.exports = PeopleoftheWoods;
