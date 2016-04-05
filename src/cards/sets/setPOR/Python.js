"use strict";
const Constants = require ("../../../Constants");
const PythonBase = require("../set6ED/Python");

class Python extends PythonBase {
  constructor(game) {
    super(game, "Python", "Portal", "POR");
  }
}

module.exports = Python;
