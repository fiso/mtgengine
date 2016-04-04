"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnakeformBase = require("../setC15/Snakeform.js");

class Snakeform extends SnakeformBase {
  constructor(game) {
    super(game, "Snakeform", "Eventide", "EVE");
  }
}

module.exports = Snakeform;
