import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BandService } from './band.service';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Controller('band')
export class BandController {
  constructor(private readonly bandService: BandService) {}
  @Post('delete')
  remove(@Body() deleteBandDto: UpdateBandDto) {
    console.log("deleteBandDto=>",deleteBandDto);
    return this.bandService.remove(deleteBandDto);
  }
  @Post()
  create(@Body() createBandDto: CreateBandDto) {
    return this.bandService.create(createBandDto);
  }

  @Get()
  findAll() {
    return this.bandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBandDto: UpdateBandDto) {
    return this.bandService.update(+id, updateBandDto);
  }

 
}
