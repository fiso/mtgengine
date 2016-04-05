"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoyagerStaff extends UnimplementedCard {
  constructor(game) {
    super(game, "Voyager Staff", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VoyagerStaff;
