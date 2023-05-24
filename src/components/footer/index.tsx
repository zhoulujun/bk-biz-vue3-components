import { defineComponent, PropType } from 'vue';
import './footer.scss';
export interface UrlItem {
  url: string,
  title: string,
}
export default defineComponent({
  name: 'Footer',
  props: {
    links: {
      type: Array as PropType<UrlItem[]>,
      default: (): UrlItem[] => [],
    },
    info: {
      type: String,
      default: 'Copyright © 2012-2022 Tencent BlueKing. All Rights Reserved.  V3.6.2858(3.6.2673)',
    },
  },
  render() {
    return (
      <footer class="monitor-navigation-footer">
        {this.links.length?(
          <div class="footer-link">
            {
              this.links.map(item => (<a href={item.url}>{item.title}</a>))
            }
          </div>
        ):''}
        <div>{this.info}</div>
      </footer>
    );
  },
});
