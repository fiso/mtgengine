"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeopleoftheWoods extends UnimplementedCard {
  constructor (game) {
    super(game, "People of the Woods", "The Dark", "DRK");
  }
}

module.exports = PeopleoftheWoods;
