"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnakeUmbraBase = require("../setPC2/SnakeUmbra.js");

class SnakeUmbra extends SnakeUmbraBase {
  constructor(game) {
    super(game, "Snake Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SnakeUmbra;
