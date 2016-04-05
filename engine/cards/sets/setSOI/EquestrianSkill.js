"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EquestrianSkill extends UnimplementedCard {
  constructor(game) {
    super(game, "Equestrian Skill", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EquestrianSkill;
