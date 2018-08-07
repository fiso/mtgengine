"use strict";
const Constants = require ("../../../Constants");
const PythonBase = require("../setS00/Python");

class Python extends PythonBase {
  constructor (game) {
    super(game, "Python", "Portal", "POR");
  }
}

module.exports = Python;
