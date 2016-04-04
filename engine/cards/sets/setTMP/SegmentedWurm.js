"use strict";
const Constants = require ("../../../Constants");
const SegmentedWurmBase = require("../setBTD/SegmentedWurm");

class SegmentedWurm extends SegmentedWurmBase {
  constructor(game) {
    super(game, "Segmented Wurm", "Tempest", "TMP");
  }
}

module.exports = SegmentedWurm;
