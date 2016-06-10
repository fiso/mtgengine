"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdvocateoftheBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Advocate of the Beast", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AdvocateoftheBeast;
