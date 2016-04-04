"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GripofAmnesia extends Card {
  constructor(game) {
    super(game, "Grip of Amnesia", "Judgment", "JUD");
  }
}

module.exports = GripofAmnesia;
