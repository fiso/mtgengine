"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteor Golem", "Core Set 2019", "M19");
  }
}

module.exports = MeteorGolem;
