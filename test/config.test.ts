import getConfig from '../src/config';
import path from 'path';

describe('getConfig()', () => {
  it('reads pipeline files and returns an array of config files - empty', async () => {
    process.chdir(__dirname);
    expect(await getConfig()).toHaveLength(0);
  });

  it('reads pipeline files and returns an array of config files - simple', async () => {
    process.chdir(path.resolve(__dirname, 'projects/simple'));
    const config = await getConfig();

    expect(config).toHaveLength(3);
    expect(config[0].name).toBe('foo');
    expect(config[1].name).toBe('bar');
    expect(config[2].name).toBe('baz');
  });
});
