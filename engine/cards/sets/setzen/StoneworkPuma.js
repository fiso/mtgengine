"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneworkPumaBase = require("../setDDP/StoneworkPuma.js");

class StoneworkPuma extends StoneworkPumaBase {
  constructor(game) {
    super(game, "Stonework Puma", "Zendikar", "ZEN");
  }
}

module.exports = StoneworkPuma;
