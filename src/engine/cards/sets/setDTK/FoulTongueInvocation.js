"use strict";
const Constants = require ("../../../Constants");
const FoulTongueInvocationBase = require("../setIMA/FoulTongueInvocation");

class FoulTongueInvocation extends FoulTongueInvocationBase {
  constructor (game) {
    super(game, "Foul-Tongue Invocation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FoulTongueInvocation;
