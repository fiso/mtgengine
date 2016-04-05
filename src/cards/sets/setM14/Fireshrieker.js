"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireshrieker extends UnimplementedCard {
  constructor(game) {
    super(game, "Fireshrieker", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Fireshrieker;
