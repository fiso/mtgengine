"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultZeppelid extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault Zeppelid", "Dissension", "DIS");
  }
}

module.exports = AssaultZeppelid;
