"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazingSalvoBase = require("../setDDK/BlazingSalvo.js");

class BlazingSalvo extends BlazingSalvoBase {
  constructor(game) {
    super(game, "Blazing Salvo", "Odyssey", "ODY");
  }
}

module.exports = BlazingSalvo;
