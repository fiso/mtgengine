"use strict";
const Constants = require ("../../../Constants");
const SarcomancyBase = require("../setTMP/Sarcomancy");

class Sarcomancy extends SarcomancyBase {
  constructor(game) {
    super(game, "Sarcomancy", "Tempest Remastered", "TPR");
  }
}

module.exports = Sarcomancy;
