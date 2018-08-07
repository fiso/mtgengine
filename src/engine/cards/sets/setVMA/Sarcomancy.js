"use strict";
const Constants = require ("../../../Constants");
const SarcomancyBase = require("../setTPR/Sarcomancy");

class Sarcomancy extends SarcomancyBase {
  constructor (game) {
    super(game, "Sarcomancy", "Vintage Masters", "VMA");
  }
}

module.exports = Sarcomancy;
