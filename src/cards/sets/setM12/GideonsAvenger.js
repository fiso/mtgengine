"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonsAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon's Avenger", "Magic 2012", "M12");
  }
}

module.exports = GideonsAvenger;
