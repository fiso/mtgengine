"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sarcomancy extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarcomancy", "Tempest Remastered", "TPR");
  }
}

module.exports = Sarcomancy;
