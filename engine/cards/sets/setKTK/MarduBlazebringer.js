"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduBlazebringer extends Card {
  constructor(game) {
    super(game, "Mardu Blazebringer", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduBlazebringer;
