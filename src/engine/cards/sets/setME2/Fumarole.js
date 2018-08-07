"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fumarole extends UnimplementedCard {
  constructor (game) {
    super(game, "Fumarole", "Masters Edition II", "ME2");
  }
}

module.exports = Fumarole;
