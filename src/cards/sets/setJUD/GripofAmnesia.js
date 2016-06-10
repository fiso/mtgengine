"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GripofAmnesia extends UnimplementedCard {
  constructor (game) {
    super(game, "Grip of Amnesia", "Judgment", "JUD");
  }
}

module.exports = GripofAmnesia;
