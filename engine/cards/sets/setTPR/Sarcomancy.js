"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SarcomancyBase = require("../setTMP/Sarcomancy.js");

class Sarcomancy extends SarcomancyBase {
  constructor(game) {
    super(game, "Sarcomancy", "Tempest Remastered", "TPR");
  }
}

module.exports = Sarcomancy;
