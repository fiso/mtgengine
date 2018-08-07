"use strict";
const Constants = require ("../../../Constants");
const KnightoftheKitchenSinkBase = require("../setUST/KnightoftheKitchenSink");

class KnightoftheKitchenSink extends KnightoftheKitchenSinkBase {
  constructor (game) {
    super(game, "Knight of the Kitchen Sink", "Unstable", "UST");
  }
}

module.exports = KnightoftheKitchenSink;
