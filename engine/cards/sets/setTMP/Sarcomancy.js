"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sarcomancy extends Card {
  constructor(game) {
    super(game, "Sarcomancy", "Tempest", "TMP");
  }
}

module.exports = Sarcomancy;
