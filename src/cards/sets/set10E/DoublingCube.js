"use strict";
const Constants = require ("../../../Constants");
const DoublingCubeBase = require("../set5DN/DoublingCube");

class DoublingCube extends DoublingCubeBase {
  constructor (game) {
    super(game, "Doubling Cube", "Tenth Edition", "10E");
  }
}

module.exports = DoublingCube;
